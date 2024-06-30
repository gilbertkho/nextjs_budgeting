
const Remove_item = (props) => {

    return (
        <button className = {`bg-[red] w-[30px] h-[30px] rounded-[6px] text-[white]`} onClick={props.removeItem}>
            -
        </button>
    )
}

export default Remove_item;