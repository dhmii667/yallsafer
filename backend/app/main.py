from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

from pydantic import BaseModel

from models import Base, Package

DATABASE_URL = "postgresql://postgres:123456@localhost/yallsafer"

engine = create_engine(DATABASE_URL)

SessionLocal = sessionmaker(bind=engine)

Base.metadata.create_all(bind=engine)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class PackageCreate(BaseModel):

    title: str
    description: str
    price: str
    image: str


@app.get("/")
def root():

    return {"message": "yallsafer backend running"}


@app.get("/packages")
def get_packages():

    db = SessionLocal()

    packages = db.query(Package).all()

    return packages


@app.get("/packages/{id}")
def get_package(id: int):

    db = SessionLocal()

    package = db.query(Package).filter(Package.id == id).first()

    return package


@app.post("/packages")
def create_package(data: PackageCreate):

    db = SessionLocal()

    package = Package(

        title=data.title,
        description=data.description,
        price=data.price,
        image=data.image

    )

    db.add(package)

    db.commit()

    db.refresh(package)

    return package