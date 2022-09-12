import React from "react";

const Header: React.FC = () => {
    return (
        <header className="bg-neutral-900  text-neutral-100 p-6">
            <div className="container mx-auto py-4 flex">
                <h1 className="text-white uppercase font-black border-4 px-2">Tom Giddings</h1>
            </div>
        </header>
    );
}

export default Header;