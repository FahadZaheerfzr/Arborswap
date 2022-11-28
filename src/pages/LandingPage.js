import Topbar from '../components/Topbar/Topbar';
import { useDocumentTitle } from '../hooks/setDocumentTitle'

export default function LandingPage() {
  useDocumentTitle("ArborSwap");
  return (
    <div className='w-full'>
      <div className='top-bar'>
          <Topbar />
      </div>

      <div className='w-full flex'>

      </div>

    </div>
  )
}
