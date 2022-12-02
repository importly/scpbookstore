# %%
import qrcode
import hashlib
import os, sys
from PIL import Image

# %%

imgs = []
datas = []
for i in ["bK6wrDtiQz9-pqgL_HC6GRCp_456ApDbGCaqK6wENj4",
"ST1Iyh9NFpZIyG1SQv35Grfdh96Vxmj4-OMd0EPNcmI",
"6HpcqteP6713AARjNG3uO8uhOjYgSfmh38XRc9Xo2N0"]:
    qr = qrcode.QRCode(
        version=1,
        error_correction=qrcode.constants.ERROR_CORRECT_L,
        box_size=10,
        border=4,
    )
    
    
    data = "https://scpbooks.org/checkout/" + i
    qr.add_data(data=data)
    qr.make(fit=True)
    img = qr.make_image(fill_color="black", back_color="white")
    imgs.append(img)
    datas.append(data)


# %%
for i in range(len(imgs)):
    print(datas[i])
    display(imgs[i])



