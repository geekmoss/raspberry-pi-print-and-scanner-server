from env import DIR, DEBUG
from endpoints import endpoints

from fastapi import FastAPI
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware


INDEX_HTML = None


app = FastAPI()
app.mount('/static', StaticFiles(directory=f"{DIR}/../frontend/build/static"), name="static")
app.mount('/files', StaticFiles(directory=f"{DIR}/../files"), name="files")
app.include_router(endpoints)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def index():
    global INDEX_HTML

    if not INDEX_HTML or DEBUG:
        with open(f"{DIR}/../frontend/build/index.html") as f:
            INDEX_HTML = HTMLResponse(f.read())
            pass
        pass

    return INDEX_HTML
    pass
