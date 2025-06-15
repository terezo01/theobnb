import React from "react";

const Item = () => {
  return (
    <a href="/" className="flex flex-col gap-2">
      <img
        src="https://emiliano.com.br/wp-content/uploads/2023/12/emiliano.com.br-pagina-inicial-emiliano-tbf7271b.jpg  "
        alt="Imagem da acomodação"
        className="aspect-square object-cover rounded-2xl"
      />
      <div>
        <h3 className="text-xl font-semibold">Cabo Frio, Rio de Janeiro</h3>
        <p className="truncate text-gray-600">Um lugar lindo</p>
      </div>
      <p>
        <span className="font-semibold">R$ 550</span> por noite
      </p>
    </a>
  );
};

export default Item;
