from sqlalchemy import Column, Integer, String
from app.database import Base

class Package(Base):
    __tablename__ = "packages"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String)
    country = Column(String)
    price = Column(String)
    duration = Column(String)
    image = Column(String)