from sqlalchemy import Column, Integer, String, Text
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()


class Package(Base):

    __tablename__ = "packages"

    id = Column(Integer, primary_key=True, index=True)

    title = Column(String)

    description = Column(String)

    price = Column(String)

    image = Column(String)

    days = Column(String)

    country = Column(String)

    hotel = Column(String)

    program = Column(Text)
