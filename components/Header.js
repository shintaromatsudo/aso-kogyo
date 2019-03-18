import Link from 'next/link' 

const Header = () => (
  <div>
    <div className='header'>
    <p>ˆ¢‘hH‹ÆŠ”®‰ïĞ</p>
    <Link href='/company' ><a>‰ïĞˆÄ“à</a></Link>
    <Link href='/factory' ><a>Hê</a></Link>
    <Link href='/product' ><a>»•i</a></Link>
    <Link href='/technology' ><a>‹Zp</a></Link>
    <Link href='/equipment' ><a>İ”õ</a></Link>
    <Link href='/access' ><a>ƒAƒNƒZƒX</a></Link>
    <Link href='/contact' ><a>‚¨–â‚¢‡‚í‚¹</a></Link>
    </div>
    <style jsx>{`
      .header {
        border: 1px solid black;
      }
    `}</style>
  </div>
) 

export default Header