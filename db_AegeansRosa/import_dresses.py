import csv
from pymongo import MongoClient
import os

from dotenv import load_dotenv
load_dotenv()  # Lädt die .env-Datei automatisch

# Verbindung zur globalen MongoDB
MONGODB_URI = os.environ.get("MONGODB_URI") # von .env
client = MongoClient(MONGODB_URI)
db = client["AegeansRosa_db"]
collection = db["dresses"]

# CSV-Datei einlesen (mit Windows-kompatibler Kodierung)
with open("dress_data.csv", newline='', encoding='utf-8-sig') as csvfile:
    reader = csv.DictReader(csvfile, delimiter=';')
    documents = []

    for row in reader:
        # Typkonvertierungen
        row["price"] = float(row["price"]) if row["price"] else None
        row["stock"] = int(row["stock"]) if row["stock"] else None
        row["unique"] = row["unique"].strip().lower() == "true" if row["unique"] else False
        row["deliverable"] = row["deliverable"].strip().lower() == "true" if row["deliverable"] else False
        row["rating"] = float(row["rating"]) if row["rating"] else None
        row["reviews"] = int(row["reviews"]) if row["reviews"] else None
        row["likes"] = int(row["likes"]) if row["likes"] else None

        # Bild-URLs als Liste
        row["image"] = [url.strip() for url in row["image"].split(",")] if row["image"] else []

        # Maße als verschachteltes Objekt
        row["measures"] = {
            "bust": float(row["bust"]) if row.get("bust") else None,
            "waist": float(row["waist"]) if row.get("waist") else None,
            "hips": float(row["hips"]) if row.get("hips") else None,
            "length": float(row["length"]) if row.get("length") else None
        }

        # Einzelne Maßfelder entfernen
        for key in ["bust", "waist", "hips", "length"]:
            row.pop(key, None)

        documents.append(row)

# In MongoDB einfügen
# print("MONGODB_URI:", MONGODB_URI)

if documents:
    collection.insert_many(documents)
    print(f"{len(documents)} Dokumente erfolgreich eingefügt.")
else:
    print("Keine Daten zum Einfügen gefunden.")
