export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 px-6 py-4 flex justify-between items-center">
        <img src="/mnt/data/Logomarca preta.fw.png" alt="Sertão Engenharia" className="h-12" />
        <div className="space-x-6 text-sm font-medium text-gray-800">
          <a href="#sobre" className="hover:text-black">Sobre</a>
          <a href="#servicos" className="hover:text-black">Serviços</a>
          <a href="#projetos" className="hover:text-black">Projetos</a>
          <a href="#contato" className="hover:text-black">Contato</a>
        </div>
      </nav>
      <div className="pt-24 px-6">
        <header className="text-center py-10">
          <p className="text-lg mt-2 text-gray-700">Projetos, Obras e Topografia com Excelência</p>
        </header>
        <!-- Seções do site... (omitidas aqui para brevidade) -->
      </div>
    </div>
  );
}
