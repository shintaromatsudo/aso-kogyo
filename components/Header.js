import Link from 'next/link' 

const Header = () => (
  <div>
    <div className='header'>
    <p>���h�H�Ɗ������</p>
    <Link href='/company' ><a>��Јē�</a></Link>
    <Link href='/factory' ><a>�H��</a></Link>
    <Link href='/product' ><a>���i</a></Link>
    <Link href='/technology' ><a>�Z�p</a></Link>
    <Link href='/equipment' ><a>�ݔ�</a></Link>
    <Link href='/access' ><a>�A�N�Z�X</a></Link>
    <Link href='/contact' ><a>���₢���킹</a></Link>
    </div>
    <style jsx>{`
      .header {
        border: 1px solid black;
      }
    `}</style>
  </div>
) 

export default Header