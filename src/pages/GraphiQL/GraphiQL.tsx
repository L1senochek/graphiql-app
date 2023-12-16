import { useAppSelector } from '@/store/hooks';
import { RootState } from '@/store/store';

const GraphiQL: React.FC = (): JSX.Element => {
  const isAuth = useAppSelector((state: RootState) => state.authSlice.auth);
  console.log(isAuth, 'isAuth');

  return <div>GraphiQL</div>;
};

export default GraphiQL;
