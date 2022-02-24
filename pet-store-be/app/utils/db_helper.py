from datetime import datetime
from typing import Optional
from ksuid import Ksuid
from sqlmodel import SQLModel, create_engine

YOUR_DATABASE_USERNAME = 'root'
YOUR_DATABASE_PASSWORD = 'petstore123aA@'
YOUR_DATABASE_NAME = 'pet_store'

engine = create_engine(
    f"mysql+pymysql://{YOUR_DATABASE_USERNAME}:{YOUR_DATABASE_PASSWORD}@localhost:3306/{YOUR_DATABASE_NAME}",
    echo=True
)
SQLModel.metadata.create_all(engine)


def generate_ksuid(date: Optional[datetime] = None) -> str:
    """A ksuid is a K sorted UID.
    In other words, a KSUID also stores a date component.
    """
    if date is None:
        date = datetime.now()
    kid = str(Ksuid(date))
    return kid
