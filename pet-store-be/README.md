- How to run back-end project:

-------------- Go to app/utils/db_helper.py--------------\
Change this line DATABASE_PASSWORD = 'petstore#123A' -> DATABASE_PASSWORD = 'your_password'


1. Must be in Pet-Store-Be folder

2. Create a env\
python3 -m venv env

3. Go into the env\
source env/bin/activate

4. Install all requirements\
pip install -r requirements/requirements.txt

5. Type this command below:\
sh init.sh

6. Go to http://127.0.0.1:8000/docs to check API !