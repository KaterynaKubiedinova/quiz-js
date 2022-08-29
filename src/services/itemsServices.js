import api from "../api/api";

export function getItemsList(ITEMS_URI) {
	return api.get(ITEMS_URI).then((resp) => resp.data);
};

export function createItem(ITEMS_URI, item) {
	return api.post(ITEMS_URI, item).then((resp) => resp.data);
};

export function updateItem(ITEMS_URI, item) {
	return api.put(ITEMS_URI + "/" + item.id, item).then((resp) => resp.data);
};

export function deleteItem(ITEMS_URI, id) {
	return api.delete(ITEMS_URI + "/" + id).then((resp) => resp.data);
};