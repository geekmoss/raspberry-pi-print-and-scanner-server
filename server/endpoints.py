from fastapi import APIRouter
from glob import iglob
from os.path import basename

from schemas import Files, Scan, File
from scanimage import scan_image
from env import FILES


ALLOWED_FORMATS = ("png", "jpeg", "jpg", "pnm", "tiff")
endpoints = APIRouter()


@endpoints.get("/list", response_model=Files)
def list_files():
    files = []
    for x in iglob(f"{FILES}/*"):
        if x.split(".")[-1] not in ALLOWED_FORMATS:
            continue

        files.append(File(
            name=basename(x)
        ))
        pass

    return Files(files=files)


@endpoints.post("/scan", response_model=int)
def scan(scan_data: Scan):
    return scan_image(scan_data.filename, FILES, scan_data.format)
