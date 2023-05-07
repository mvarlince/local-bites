import { Alert, ScrollView, View } from "react-native/types"
import RestaurantCard from "./RestaurantCard"

export default function RestaurantList () {

    const [restaurants, setRestaurants] = useState([])

    useEffect(() => {
        fetch('https://my-first-firestore-bc.web.app/restaurants')
        .then(response => response.json())
        .then(data => setRestaurants(data.sort((a,b) => b.rating - a.rating)))
        .catch(Alert.alert('Error', 'Something went wrong')
        )
    }, [])

    return (
        <View>
            <ScrollView>
                {restaurants.map((restaurant) => {
                    <RestaurantCard 
                            restaurant={restaurant}
                            key={restaurant.id}/>
                })}
            </ScrollView>
        </View>
    )
}