
const ExtraFee = (props) => {


    return (
        <div className="flex gap-[4px]">
            <input type="text" placeholder="Fee Name" className="p-[2px] rounded-[4px]" value={props.name}/>
            <input type="number" placeholder="Fee" className="p-[2px] rounded-[4px]" value={props.fee} onChange={props.onChangeNumber}/>
        </div>
    )
}

export default ExtraFee;