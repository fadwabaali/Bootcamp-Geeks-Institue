from fastapi import FastAPI, HTTPException, Request
from menu_item_class import Menu_Item
from menu_managers_class import Menu_Managers

app = FastAPI()

@app.get("/menu/items")
def get_all_items():
    try:
        items = Menu_Managers.all_items()
        return [{'name': item.name, 'price': item.price} for item in items]
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/menu/items/{name}")
def get_item_by_name(name: str):
    try:
        item = Menu_Managers.get_by_name(name)
        if item:
            return {'name': item.name, 'price': item.price}
        else:
            raise HTTPException(status_code=404, detail="Item not found")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/menu/items")
async def add_item(request: Request):
    try:
        data = await request.json()
        item_name = data.get('name')
        item_price = data.get('price')
        if item_name and item_price:
            menu_item = Menu_Item(item_name, item_price)
            menu_item.save()
            return {'message': f'{item_name} was added successfully.'}
        else:
            raise HTTPException(status_code=400, detail="Invalid input")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.delete("/menu/items/{name}")
def delete_item(name: str):
    try:
        item = Menu_Item(name, 0)
        item.delete()
        return {'message': f'{name} was removed successfully.'}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.put("/menu/items/{name}")
async def update_item(name: str, request: Request):
    try:
        data = await request.json()
        new_name = data.get('new_name')
        new_price = data.get('new_price')
        if new_name and new_price:
            item = Menu_Item(name, 0)
            item.update(new_name, new_price)
            return {'message': f'{name} was updated successfully.'}
        else:
            raise HTTPException(status_code=400, detail="Invalid input")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)
    