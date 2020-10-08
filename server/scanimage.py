from subprocess import call
from os.path import join


def scan_image(filename: str, path: str, image_format: str = "png"):
    with open(join(path, f"{filename}.{image_format}"), "w") as f:
        return call([
            "scanimage",
            "--format",
            image_format
        ], stdout=f)
        pass
    pass
