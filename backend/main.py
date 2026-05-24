from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from pydantic import BaseModel
from fastapi import UploadFile, File 
from fastapi.staticfiles import StaticFiles 
import shutil
import os 
from models import Base, Package

DATABASE_URL = "postgresql://postgres:123456@localhost/yallsafer"

engine = create_engine(DATABASE_URL)

SessionLocal = sessionmaker(bind=engine)

Base.metadata.create_all(bind=engine)

app = FastAPI()

# STATIC FILES
app.mount(
    "/uploads",
    StaticFiles(directory="uploads"),
    name="uploads"
)
# CORS

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ROOT

@app.get("/")
def root():

    return {
        "message": "YallSafer Backend Running"
    }

# GET ALL PACKAGES

@app.get("/packages")
def get_packages():

    db = SessionLocal()

    packages = db.query(Package).all()

    return [

        {
            "id": p.id,
            "title": p.title,
            "description": p.description,
            "price": p.price,
            "image": p.image,
            "days": p.days,
            "country": p.country,
            "hotel": p.hotel,
        }

        for p in packages

    ]

# GET SINGLE PACKAGE

@app.get("/packages/{id}")
def get_package(id: int):

    db = SessionLocal()

    package = db.query(Package).filter(
        Package.id == id
    ).first()

    if not package:

        return {
            "error": "Package not found"
        }

    return {

        "id": package.id,
        "title": package.title,
        "description": package.description,
        "price": package.price,
        "image": package.image,
        "days": package.days,
        "country": package.country,
        "hotel": package.hotel,

    }



# CREATE PACKAGE MODEL

class PackageCreate(BaseModel):

    title: str
    description: str
    price: int
    image: str
    days: str
    country: str
    hotel: str
    program: str

# CREATE PACKAGE

@app.post("/packages")
def create_package(data: PackageCreate):

    db = SessionLocal()

    package = Package(

        title=data.title,
        description=data.description,
        price=data.price,
        image=data.image,
        days=data.days,
        country=data.country,
        hotel=data.hotel,
        program=data.program,

    )

    db.add(package)

    db.commit()

    db.refresh(package)

    return {
        "message": "Package created"
    }

# UPLOAD IMAGE

@app.post("/upload")
def upload_image(file: UploadFile = File(...)):

    file_path = f"uploads/{file.filename}"

    with open(file_path, "wb") as buffer:

        shutil.copyfileobj(
            file.file,
            buffer
        )

    return {

        "image_url":
        f"http://127.0.0.1:8000/{file_path}"

    }