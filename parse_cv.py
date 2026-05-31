import urllib.request
import urllib.parse
import io
import sys
try:
    import pypdf
except ImportError:
    print("pypdf not installed")
    sys.exit(1)

url = "https://drive.google.com/uc?export=download&id=1dFJWf8xWNqnh-rB43LmsgazQpam0NHyr"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    with urllib.request.urlopen(req) as response:
        pdf_file = io.BytesIO(response.read())
        reader = pypdf.PdfReader(pdf_file)
        text = ""
        for page in reader.pages:
            text += page.extract_text() + "\n"
        print(text)
except Exception as e:
    print(f"Error: {e}")
