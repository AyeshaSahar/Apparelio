import Card from './Card'
import {useEffect, useState} from 'react';
import {supabase} from '../components/supabase'

export default function Products() {

  const [products_info, setProductsInfo] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
    
  }, []);

  const fetchData = async () => {
    try{
      setLoading(true);
      const {data, error} = await supabase.from("products_info").select('*');
      if (error) throw error;
      setProductsInfo(data);
    }
    catch (error) {
      alert(error.message);
    }
    finally{
      setLoading(false);
    }
  }

  return (
    <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6">
      <h1 className="text-4xl font-bold text-center mb-8">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-10">
        { loading ? (
          <p>Loading..........</p>
        ) : (
          products_info.map((pInfo) => (
            <Card key={pInfo.id} pInfo={pInfo} />
          ))
        )}
      </div>
    </div>
  );
}
