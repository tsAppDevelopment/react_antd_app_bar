import {Grid} from 'antd'
import {TopMenu} from './top_menu'
import {SearchBar} from './search_bar'
import {HamMenu} from './ham_menu'
import {menuData} from './test_data'
import './style.css'
import src from './logo.png'
import {ProfileMenu} from './profile_menu'

export const Nav = () => {
  const {sm, md} = Grid.useBreakpoint()
  // TODO: client side useSession here to get the login state
  // TODO: _app session provider for useSession
  const mockUser: {email: string; img: string} | null = {email:'email.com', img:'https://lh3.googleusercontent.com/a/AATXAJxZPhzcF9yMhc7yn2bFteLI3KpuEpQJ48h1fQm_=s96-c'}

  return (
    <>
      <div
        style={{
          zIndex: 1,
          height: 58,
          backgroundColor: 'white',
          position: 'fixed',
          left: 0,
          top: 0,
          right: 0,
          borderBottom: '1px solid #656565',
        }}
      />

      <HamMenu
        data={menuData}
        style={{
          zIndex: 1,
          position: 'fixed',
          left: 14,
          top: 14,
        }}
      />

      <div
        onClick={() => {}}
        style={{
          position: 'fixed',
          zIndex: 1,
          left: 60,
          top: 2,
          cursor: 'pointer',
        }}
      >
        <img src={src} alt="my logo" />
      </div>

      {md && (
        <TopMenu
          itemGroups={menuData.filter((x, i) => i < 3)}
          style={{
            zIndex: 1,
            position: 'fixed',
            top: 4,
            left: 216,
            width: 300,
          }}
        />
      )}

      {sm && (
        <SearchBar
          style={{
            zIndex: 1,
            position: 'fixed',
            top: 12,
            left: md ? 500 : 234,
            right: mockUser ? 72 : 134,
          }}
        />
      )}

      <ProfileMenu
        user={mockUser}
        avatarStyle={{
          zIndex: 1,
          position: 'fixed',
          top: 10,
          right: 18,
          cursor: 'pointer',
        }}
        signInStyle={{
          zIndex: 1,
          position: 'fixed',
          top: 12,
          right: 18,
        }}
      />
    </>
  )
}
