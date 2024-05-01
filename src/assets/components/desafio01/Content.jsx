import { Posts } from './Posts.jsx'
import '../../styles/desafio01/D1-content.css'

export const Content = () => {
    return (
        <main className='mainContent'>
            <div className="content">
                <section>
                    <Posts/>
                </section>
            </div>
        </main>
    )
}