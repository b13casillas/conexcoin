export default function Reloj({ time }) {
  function hora() {
    var fecha = new Date();
    var hora = fecha.getHours();
    var minutos = fecha.getMinutes();
    var segundos = fecha.getSeconds();
  }
  return (
    <>
      <h1>{setInterval({ hora }, 1000)}</h1>
      <input />
    </>
  );
}
