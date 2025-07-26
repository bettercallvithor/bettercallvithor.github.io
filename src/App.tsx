import Drawer from "./components/drawer/Drawer"

function App() {
  return (
    <Drawer>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <h1>Welcome to my portfolio</h1>
        <p>The content will be available soon.</p>
        <p><i>Under development!</i></p>
      </div>
    </Drawer>
  )
}

export default App
