
const ItemDetail = ({ itemDetail: { title, stock, description, price, img } }) => {

    return (
        <>
            <div className="modal-detail__content--img">
                <img src={img} alt="" />
            </div>
            <div className="modal-detail__content--info">
                <div className="modal-detail__content--info__header">
                    <h2>{title}</h2>
                </div>
                <br />
                <hr />
                <div className="modal-detail__content--info__body">
                    <div className="item-detail-info">
                        <p>Descripción:<span>&nbsp;{description}</span></p>
                        <p>Precio:<span>&nbsp;{price}€</span></p>
                        <p>Cantidad disponible:<span>&nbsp;{stock}</span></p>
                    </div>
                </div>
                <div className="modal-detail__content--info__footer">
                    <button disabled>Agregar al carrito</button>
                </div>
            </div>
        </>
    )
}

export default ItemDetail