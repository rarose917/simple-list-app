import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";

const URL = "https://extinct-api.herokuapp.com/api/v1/animal/";

type Animal = {
  binomialName: string;
  commonName: string;
  location: string;
};

type ApiResponse = {
  status: string;
  data: Animal[];
};

export default function APIAnimals() {
  const [animals, setAnimals] = useState<Animal[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(URL);
        const result: ApiResponse = await response.json();

        console.log(result.data);
        setAnimals(result.data);
      } catch (err) {
        setError(err);
      }

      setLoading(false);
    };

    fetchData();
  }, []);

  return (
  <View>
    {loading ? (
      <ActivityIndicator size="large" />
    ) : error ? (
      <Text>Error: Unable to load data</Text>
    ) : (
      <FlatList
        data={animals}
        keyExtractor={(index) => index.toString()}
        renderItem={({ item }) => (
          <View style={{marginBottom: 12}}>
          <Text>
            Name: {item.commonName} 
          </Text>
          <Text>
            Location: {item.location}
          </Text>
          <Text>
            Scientific Name:{item.binomialName}
          </Text>
          </View>
        )}
      />
    )}
  </View>
);
}