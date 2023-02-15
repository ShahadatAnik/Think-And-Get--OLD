import React from "react";

export default function ShopCard({ shops }) {
    return (
        <div>
            {shops?.map((shop) => (
                <div key={shop.id} className="m-10 flex flex-col space-y-4">
                    {shop.name}
                </div>
            ))}
        </div>
    );
}
