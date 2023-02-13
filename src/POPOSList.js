import POPOSSpace from "./POPOSSpace"
import data from './sfpopos-data.json';
import './POPOSList.css';


function POPOSList() {

    const spaces = data.map(( { title, address, images, hours } ) => {
    return (
        <POPOSSpace
        key={title} // The title could be a key
        name={title}
        address={address}
        image={images[0]}
        hours={hours}
        />
    )
})

    return (
        <div className="POPOSList">
        { spaces }
        </div>
    )
}

export default POPOSList

// ***** manually inputting data for each example: *****

// function POPOSList() {
//     return (
//         <div className="POPOSList">
//             <POPOSSpace
//                 name="50 California Street"
//                 address="50 California St."
//                 image="50-california-st.jpg"
//             />
//             <POPOSSpace
//             name="100 Pine"
//             address="100 Pine"
//             image="100-pine.jpg"
//             />
//             <POPOSSpace
//             name="101 California Street"
//             address="101 California St."
//             image="101-california.jpg"
//             />
//             <POPOSSpace 
//             name="Citigroup Center"
//             address="Citigroup Center"
//             image="citigroup-center.jpg"
//             />
//             <POPOSSpace
//             name="Garden Terrace at 150 California"
//             address="Garden Terrace at 150 California"
//             image="garden-terrace-at-150-california.jpg"
//             />
//             <POPOSSpace
//             name="Transamerica Redwood Park"
//             address="Transamerica Redwood Park"
//             image="transamerica-redwood-park.jpg"
//             />
//         </div>
//     )
// }