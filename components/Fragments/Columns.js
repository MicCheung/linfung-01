

export const Columns01 = ({section}) => {

    return (
        <>
            {section.items?.map((item, i) => (
                <ul key={"e105"+i} className="list-none">
                    <li key={"e104"+i} className="break-words" >
                        <div key={"e101"+i}  className="grid grid-cols-5 md:grid-cols-6 ">
                            <div key={"e102"+i} className="col-span-2 md:col-span-1 text-xl md:text-xl font-semibold">
                                {item.left}
                            </div>
                            <div key={"e103"+i} className="col-span-3 md:col-span-5 text-xl md:text-xl">
                                {item.right}
                            </div>
                        </div>
                    </li>
                    <br></br>
                </ul>     
            ))}
        </>
    );
}