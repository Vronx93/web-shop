import { http, HttpResponse } from "msw";

export const successGetHandlers = [
    http.get('https://localhost:7009/api/Gadgets', () => {
        return HttpResponse.json([
                {
                    "id": "65f0c996da08122ab6bc9431",
                    "name": "T-shirt",
                    "description": "Nice t-shirt",
                    "price": 49,
                    "count": 99
                },
                {
                    "id": "65f0c996da08122ab6bc9436",
                    "name": "Shoes",
                    "description": "Great shoes!",
                    "price": 249,
                    "count": 99
                }
            ], {status: 200}
        )
    }),
]