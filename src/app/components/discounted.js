

const Discounted = (props) => {

    return(
        <input className={'p-[2px] rounded-[4px]'} type='number' value={props.price} onChange={props.onChangeNumber}/>
    )
}

export default Discounted