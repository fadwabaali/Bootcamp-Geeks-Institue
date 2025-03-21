from flask import Flask, request, jsonify
from menu_item_class import Menu_Item
from menu_managers_class import Menu_Managers
from menu_editor import show_user_menu
app = Flask(__name__)

@app.route('/menu/items', methods=['GET'])
def get_all_items():
    try:
        items = Menu_Managers.all_items()
        return jsonify([{'name': item.name, 'price': item.price} for item in items])
    except Exception as e:
        return jsonify({'error': str(e)})
    
@app.route('/menu/items/<name>', methods=['GET'])
def get_item_by_name(name):
    try:
        item = Menu_Managers.get_by_name(name)
        if item:
            return jsonify({'name': item.name, 'price': item.price}),200
        else:
            return jsonify({'error': 'Item not found'}), 404
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/menu/items', methods=['POST'])
def add_item():
    try:
        data = request.get_json()
        item_name = data.get('name')
        item_price = data.get('price')
        if item_name and item_price:
            item = Menu_Item(item_name, item_price)
            item.save()
            return jsonify({'message': f'{item_name} was added successfully.'}), 200
        else:
            return jsonify({'error': 'Invalid input'}), 400
    except Exception as e:
        return jsonify({'error': str(e)}),500
    
@app.route('/menu/items/<name>', methods=['DELETE'])
def delete_item(name):
    try:
        item = Menu_Item(name, 0)
        item.delete()
        return jsonify({'message': f'{name} was removed successfully.'})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/menu/items/<name>', methods=['PUT'])
def update_item(name):
    try:
        data = request.get_json()
        new_name = data.get('new_name')
        new_price = data.get('new_price')
        if new_name and new_price:
            item = Menu_Item(name, 0)
            item.update(new_name, new_price)
            return jsonify({'message': f'{name} was updated successfully.'})
        else:
            return jsonify({'error': 'Invalid input'}), 400
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == "__main__":
    show_user_menu()
