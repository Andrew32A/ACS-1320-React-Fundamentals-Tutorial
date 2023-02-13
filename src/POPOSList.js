import POPOSSpace from "./POPOSSpace"
import './POPOSList.css';

function POPOSList() {
    return (
        <div className="POPOSList">
            <POPOSSpace
                name="50 California Street"
                address="50 California St."
                image="50-california-st.jpg"
            />
            <POPOSSpace
            name="100 Pine"
            address="100 Pine"
            image="100-pine.jpg"
            />
            <POPOSSpace
            name="101 California Street"
            address="101 California St."
            image="101-california.jpg"
            />
            <POPOSSpace 
            name="Citigroup Center"
            address="Citigroup Center"
            image="citigroup-center.jpg"
            />
            <POPOSSpace
            name="Garden Terrace at 150 California"
            address="Garden Terrace at 150 California"
            image="garden-terrace-at-150-california.jpg"
            />
            <POPOSSpace
            name="Transamerica Redwood Park"
            address="Transamerica Redwood Park"
            image="transamerica-redwood-park.jpg"
            />
        </div>
    )
}

export default POPOSList