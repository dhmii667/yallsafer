from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database import SessionLocal
from app.models.package import Package
from app.schemas.package_schema import PackageCreate

router = APIRouter()

# Database Session
def get_db():
    db = SessionLocal()

    try:
        yield db

    finally:
        db.close()

# Get All Packages
@router.get("/")
def get_packages(
    db: Session = Depends(get_db)
):
    packages = db.query(Package).all()

    return packages

# Get Single Package
@router.get("/{package_id}")
def get_package(
    package_id: int,
    db: Session = Depends(get_db)
):

    package = db.query(Package).filter(
        Package.id == package_id
    ).first()

    if not package:

        return {
            "message": "Package not found"
        }

    return package

# Create Package
@router.post("/")
def create_package(
    package: PackageCreate,
    db: Session = Depends(get_db)
):

    new_package = Package(
        title=package.title,
        country=package.country,
        price=package.price,
        duration=package.duration,
        image=package.image
    )

    db.add(new_package)

    db.commit()

    db.refresh(new_package)

    return new_package

# Delete Package
@router.delete("/{package_id}")
def delete_package(
    package_id: int,
    db: Session = Depends(get_db)
):

    package = db.query(Package).filter(
        Package.id == package_id
    ).first()

    if not package:

        return {
            "message": "Package not found"
        }

    db.delete(package)

    db.commit()

    return {
        "message": "Package deleted"
    }