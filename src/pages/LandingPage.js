import BaseLayout from '../components/BaseLayout/BaseLayout';
import HomeLayout from '../components/Home/HomeLayout';
import { useDocumentTitle } from '../hooks/setDocumentTitle';

export default function LandingPage() {
  useDocumentTitle("ArborSwap");
  return (
    <div className='w-full'>

      <div className='base-layout'>
        <BaseLayout >
            <HomeLayout />
        </BaseLayout>
      </div>

    </div>
  )
}
