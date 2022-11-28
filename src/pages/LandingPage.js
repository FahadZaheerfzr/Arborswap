import BaseLayout from '../components/BaseLayout/BaseLayout';
import { useDocumentTitle } from '../hooks/setDocumentTitle'

export default function LandingPage() {
  useDocumentTitle("ArborSwap");
  return (
    <div className='w-full'>

      <div className='base-layout'>
          <BaseLayout />
      </div>

    </div>
  )
}
