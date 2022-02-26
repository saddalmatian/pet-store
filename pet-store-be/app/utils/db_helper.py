from datetime import datetime
from typing import Optional
from ksuid import Ksuid
from sqlmodel import SQLModel, create_engine
import warnings
warnings.filterwarnings(
    "ignore",
    ".*Class SelectOfScalar will not make use of SQL compilation caching.*",
)
warnings.filterwarnings(
    "ignore",
    ".*Class Select will not make use of SQL compilation caching.*",
)

DATABASE_USERNAME = 'root'
DATABASE_PASSWORD = 'petstore#123A'
DATABASE_NAME = 'pet_store'

engine = create_engine(
    f"mysql+pymysql://{DATABASE_USERNAME}:{DATABASE_PASSWORD}@localhost:3306\
        /{DATABASE_NAME}",
    echo=True
)
SQLModel.metadata.create_all(engine)


def generate_ksuid(date: Optional[datetime] = None) -> str:
    """A ksuid is a K sorted UID.
    In other words, a KSUID also stores a date component.
    """
    if date is None:
        date = datetime.now()
    kid = str(Ksuid(date))[0:19]
    return kid
