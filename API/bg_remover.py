from fastapi import FastAPI, File, UploadFile
from rembg import remove
from PIL import Image
import io

app = FastAPI()

@app.post("/remove-bg/")
async def remove_background(file: UploadFile = File(...)):
    try:
        # Read the image file
        image = Image.open(io.BytesIO(await file.read()))

        # Remove background
        output_image = remove(image)

        # Convert the processed image to bytes
        img_byte_arr = io.BytesIO()
        output_image.save(img_byte_arr, format="PNG")
        img_byte_arr = img_byte_arr.getvalue()

        return {"status": "success", "image": img_byte_arr.hex()}
    
    except Exception as e:
        return {"status": "error", "message": str(e)}
