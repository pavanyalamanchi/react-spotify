import {BiShuffle} from 'react-icons/bi'
import {BsSkipStartFill, BsPlayFill, BsSkipEndFill, BsTextarea} from 'react-icons/bs'
import {Row} from 'react-bootstrap'
import progress from '../assets/progressbar.png'

const PlayBar = () => (
    <section className='playbar'>
        <div style={{marginTop:'1rem'}}>
            <Row className='justify-content-center'>
            <BiShuffle />
            <BsSkipStartFill/>
            <BsPlayFill/>
            <BsSkipEndFill/>
            <BsTextarea/>
            </Row>
            <Row className='justify-content-center'>
                <img src={progress} alt='#' style={{width:'40%'}}/>
            </Row>
        </div>

    </section>
)

export default PlayBar