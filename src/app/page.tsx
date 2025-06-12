import { MessageList } from "../../components/notifications/message-list"

export default function Home() {
  return (
    <div>
      <main className="flex flex-col items-center min-h-screen p-4">
        <h1 className="text-4xl font-bold text-center">Sveiki!</h1>
        <p className="mt-4 text-lg text-center text-gray-700">
          Su šia aplikacija galite valdyti savo produktus ir sandėlius.
        </p>
        <MessageList />
      </main>
    </div>
  )
}
