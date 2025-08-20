import { FiShoppingCart } from 'react-icons/fi';
import OrangeButton from '../Button/OrangeButton';
import { useNavigate } from 'react-router';
const EmptyCart = () => {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col justify-center items-center gap-6 min-h-[80vh] px-4 text-center">
      <FiShoppingCart className="w-20 h-20 text-orange-500 animate-bounce" />
      <h2 className="text-3xl md:text-5xl font-bold text-orange-500 select-none">
        Your Cart is Empty
      </h2>
      <p className="max-w-sm text-gray-600 text-lg md:text-xl">
        Looks like you haven't added any tasty treats yet. Let's fix that!
      </p>
      <OrangeButton
        className="px-5 py-4 text-xl md:text-4xl bg-amber-500 rounded-3xl text-white shadow-lg hover:bg-amber-600 transition"
        title={"Start Shopping"}
        onClick={() => navigate('/')}
      />
    </div>
  );
};

export default EmptyCart;
