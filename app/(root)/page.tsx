import HeaderBox  from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import  TotalBalancebox from '@/components/TotalBalanceBox'

const Home = () => {
  const loggedIn = {firstName:'Ashutosh',lastName:'Pant',email:'ashutoshpant.855@gmail.com'};
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
          type = "greeting"
          title ="welcome"
          user={loggedIn?.firstName||'Guest'}
          subtext = "Access and Manage your account and transfer efficiently "
          />
          <TotalBalancebox
          accounts ={[]}
          totalBanks = {1}
          totalCurrentBalance={1250.35}
          />
        </header>
        RECENT TRANSACTIONS
      </div>


      <RightSidebar
      user={loggedIn}
      transactons={[]}
      banks={[{currentBalance: 12350},{currentBalance: 22670}]}
      />
    </section>
  )
}

export default Home