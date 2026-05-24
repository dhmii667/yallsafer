from pydantic import BaseModel

class PackageCreate(BaseModel):
    title: str
    country: str
    price: str
    duration: str
    image: str

class PackageResponse(PackageCreate):
    id: int

    class Config:
        orm_mode = True