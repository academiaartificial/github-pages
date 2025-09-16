import React, { useState, useMemo } from 'react';
import './MicrosoftStore.css';

const MicrosoftStore = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [priceFilter, setPriceFilter] = useState('all');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const appSections = [
    {
      title: 'Aplicaciones esenciales para cada tarea',
      apps: [
        { name: 'FL Studio Mobile - Producción musical profesional', price: 'S/50.00', isFree: false, icon: 'https://cdn-icons-png.flaticon.com/512/3655/3655582.png', bgClass: 'bg-music', link: 'arit0.html' },
        { name: 'Trio Office: Editor de documentos y hojas de cálculo', price: 'Gratis', isFree: true, icon: 'https://cdn-icons-png.flaticon.com/512/732/732220.png', bgClass: 'bg-office', link: 'https://www.microsoft.com/es-es/p/trio-office/9nblggh4n4m0' },
        { name: 'Document Manager - Organizador de archivos para Windows', price: 'Gratis', isFree: true, icon: 'https://cdn-icons-png.flaticon.com/512/888/888859.png', bgClass: 'bg-office', link: 'https://www.microsoft.com/es-es/p/document-manager/9wzdncrfj0t1' },
        { name: 'Diarium: Diario personal con gráficos y notas', price: 'S/41.50', isFree: false, icon: 'https://cdn-icons-png.flaticon.com/512/3655/3655582.png', bgClass: 'bg-productivity', link: 'https://www.microsoft.com/es-es/p/diarium/9nblggh4n4m1' },
        { name: 'Universal File Viewer - Visualizador de archivos múltiples', price: 'Gratis', isFree: true, icon: 'https://cdn-icons-png.flaticon.com/512/888/888859.png', bgClass: 'bg-utilities', link: 'https://www.microsoft.com/es-es/p/universal-file-viewer/9wzdncrfj0t2' },
        { name: 'TubeMate MP3 - Descargar videos y audio', price: 'Gratis', isFree: true, icon: 'https://cdn-icons-png.flaticon.com/512/1384/1384060.png', bgClass: 'bg-multimedia', link: 'https://www.microsoft.com/es-es/p/tubemate-mp3/9nblggh4n4m2' },
        { name: 'Grabador de pantalla - Captura y grabación en HD', price: 'Gratis', isFree: true, icon: 'https://cdn-icons-png.flaticon.com/512/2946/2946170.png', bgClass: 'bg-multimedia', link: 'https://www.microsoft.com/es-es/p/grabador-pantalla/9wzdncrfj0t3' },
        { name: 'Any Video Converter - Soporte HEVC avanzado', price: 'Gratis', isFree: true, icon: 'https://cdn-icons-png.flaticon.com/512/2946/2946170.png', bgClass: 'bg-multimedia', link: 'https://www.microsoft.com/es-es/p/any-video-converter/9nblggh4n4m3' },
      ]
    },
    {
      title: 'Innovaciones de Office: kit de herramientas multimedia y para la oficina',
      apps: [
        { name: 'Nebo - Toma de notas inteligente con conversión de escritura', price: 'S/53.50', isFree: false, icon: 'https://cdn-icons-png.flaticon.com/512/3655/3655582.png', bgClass: 'bg-productivity', link: 'https://www.microsoft.com/es-es/p/nebo/9nblggh4n4m4' },
        { name: 'File Viewer Plus - Visualizador universal de archivos', price: 'Gratis', isFree: true, icon: 'https://cdn-icons-png.flaticon.com/512/888/888859.png', bgClass: 'bg-utilities', link: 'https://www.microsoft.com/es-es/p/file-viewer-plus/9wzdncrfj0t4' },
        { name: 'Trio Office: Editor avanzado de documentos DOCK & XLSX', price: 'Gratis', isFree: true, icon: 'https://cdn-icons-png.flaticon.com/512/732/732220.png', bgClass: 'bg-office', link: 'https://www.microsoft.com/es-es/p/trio-office-pro/9nblggh4n4m5' },
        { name: 'SnapT Convertidor MP3 - Descargar y convertir audio', price: 'Gratis', isFree: true, icon: 'https://cdn-icons-png.flaticon.com/512/2946/2946170.png', bgClass: 'bg-multimedia', link: 'https://www.microsoft.com/es-es/p/snapt-convertidor/9wzdncrfj0t5' },
        { name: 'Video Converter: Conversor MP4 de alta velocidad', price: 'Gratis', isFree: true, icon: 'https://cdn-icons-png.flaticon.com/512/2946/2946170.png', bgClass: 'bg-multimedia', link: 'https://www.microsoft.com/es-es/p/video-converter/9nblggh4n4m6' },
        { name: '123 Fotos: Editor, visualizador y conversor de imágenes', price: 'Gratis', isFree: true, icon: 'https://cdn-icons-png.flaticon.com/512/2946/2946170.png', bgClass: 'bg-multimedia', link: 'https://www.microsoft.com/es-es/p/123-fotos/9wzdncrfj0t6' },
        { name: 'Audio Joiner - Unir y editar archivos de audio', price: 'S/5.50', isFree: false, icon: 'https://cdn-icons-png.flaticon.com/512/3655/3655582.png', bgClass: 'bg-music', link: 'https://www.microsoft.com/es-es/p/audio-joiner/9nblggh4n4m7' },
      ]
    },
    {
      title: 'Esenciales hogar multimedia',
      apps: [
        { name: 'Duplicates Cleaner Prime - Eliminador de archivos duplicados', price: 'S/25.00', isFree: false, icon: 'https://cdn-icons-png.flaticon.com/512/888/888859.png', bgClass: 'bg-utilities', link: 'https://www.microsoft.com/es-es/p/duplicates-cleaner/9wzdncrfj0t7' },
        { name: 'Screen Recorder - Grabadora de pantalla profesional', price: 'Gratis', isFree: true, icon: 'https://cdn-icons-png.flaticon.com/512/2946/2946170.png', bgClass: 'bg-multimedia', link: 'https://www.microsoft.com/es-es/p/screen-recorder/9nblggh4n4m8' },
        { name: 'Document Manager for Windows 10 - Organizador de archivos', price: 'Gratis', isFree: true, icon: 'https://cdn-icons-png.flaticon.com/512/888/888859.png', bgClass: 'bg-office', link: 'https://www.microsoft.com/es-es/p/document-manager-10/9wzdncrfj0t8' },
        { name: 'Mobbio 3D - Visualizador de modelos tridimensionales', price: 'Gratis', isFree: true, icon: 'https://cdn-icons-png.flaticon.com/512/2946/2946170.png', bgClass: 'bg-multimedia', link: 'https://www.microsoft.com/es-es/p/mobbio-3d/9nblggh4n4m9' },
        { name: 'Cider (Preview) - Reproductor de música avanzado', price: 'S/1.50', isFree: false, icon: 'https://cdn-icons-png.flaticon.com/512/3655/3655582.png', bgClass: 'bg-music', link: 'https://www.microsoft.com/es-es/p/cider/9wzdncrfj0t9' },
        { name: 'Total PC Cleaner - Limpieza de disco y optimización', price: 'Gratis', isFree: true, icon: 'https://cdn-icons-png.flaticon.com/512/888/888859.png', bgClass: 'bg-utilities', link: 'https://www.microsoft.com/es-es/p/total-pc-cleaner/9nblggh4n4n0' },
        { name: 'Any Video Converter - Soporte HEVC para todos los formatos', price: 'Gratis', isFree: true, icon: 'https://cdn-icons-png.flaticon.com/512/2946/2946170.png', bgClass: 'bg-multimedia', link: 'https://www.microsoft.com/es-es/p/any-video-converter-pro/9wzdncrfj0t0' },
        { name: 'M4A to MP3 - Convertidor de audio rápido y eficiente', price: 'S/10.50', isFree: false, icon: 'https://cdn-icons-png.flaticon.com/512/3655/3655582.png', bgClass: 'bg-music', link: 'https://www.microsoft.com/es-es/p/m4a-to-mp3/9nblggh4n4n1' },
      ]
    }
  ];

  const filteredSections = useMemo(() => {
    return appSections
      .map(section => {
        const filteredApps = section.apps.filter(app => {
          // Filtrar por búsqueda
          const matchesSearch = searchQuery === '' || 
            app.name.toLowerCase().includes(searchQuery.toLowerCase());
          
          // Filtrar por precio
          let matchesPrice = true;
          if (priceFilter === 'free') {
            matchesPrice = app.isFree;
          } else if (priceFilter === 'paid') {
            matchesPrice = !app.isFree;
          }
          
          return matchesSearch && matchesPrice;
        });
        
        // Devolver la sección solo si tiene aplicaciones
        return filteredApps.length > 0 ? { ...section, apps: filteredApps } : null;
      })
      .filter(section => section !== null);
  }, [searchQuery, priceFilter]);

  const handleSetPriceFilter = (filter) => {
    setPriceFilter(filter);
  };

  const clearFilters = () => {
    setSearchQuery('');
    setPriceFilter('all');
  };

  return (
    <div className="microsoft-store bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-200">
      {/* Barra superior para móviles */}
      <div className="mobile-top-bar md:hidden flex items-center justify-between p-4 bg-gray-800 text-white">
        <div className="flex items-center">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="mr-4">
            <i className="fas fa-bars text-xl"></i>
          </button>
          <h1 className="text-xl font-semibold">Microsoft Store</h1>
        </div>
        <button>
          <i className="fas fa-search text-xl"></i>
        </button>
      </div>

      <div className="flex min-h-screen font-sans">
        {/* Menú lateral - Oculto en móviles */}
        <aside className={`side-menu menu-transition ${mobileMenuOpen ? 'flex' : 'hidden md:flex'} w-64 md:w-20 bg-gray-200 dark:bg-gray-800 p-2 flex-col items-center space-y-6 flex-shrink-0 fixed md:relative h-full z-10`}>
          <div className="p-2 rounded-md hover:bg-gray-300 dark:hover:bg-gray-700 cursor-pointer self-end md:self-center" onClick={() => setMobileMenuOpen(false)}>
            <i className="fas fa-times md:hidden"></i>
          </div>
          <nav className="flex flex-col items-center space-y-4 w-full">
            <a href="#" className="p-3 bg-gray-300 dark:bg-gray-700 rounded-md w-full text-center md:w-auto" aria-current="page">
              <i className="fas fa-home"></i>
              <span className="ml-2 md:hidden">Inicio</span>
            </a>
            <a href="#" className="p-3 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-md w-full text-center md:w-auto">
              <i className="fas fa-th"></i>
              <span className="ml-2 md:hidden">Categorías</span>
            </a>
            <a href="#" className="p-3 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-md w-full text-center md:w-auto">
              <i className="fas fa-play-circle"></i>
              <span className="ml-2 md:hidden">Video</span>
            </a>
            <a href="#" className="p-3 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-md w-full text-center md:w-auto">
              <i className="fas fa-shopping-bag"></i>
              <span className="ml-2 md:hidden">Compras</span>
            </a>
          </nav>
        </aside>

        {/* Overlay para móviles */}
        {mobileMenuOpen && (
          <div onClick={() => setMobileMenuOpen(false)} className="mobile-overlay fixed inset-0 bg-black bg-opacity-50 z-0 md:hidden"></div>
        )}

        <main className="main-content flex-1 p-4 md:p-6 md:ml-0">
          {/* Header con buscador y filtros */}
          <header className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
            <div className="relative w-full md:w-1/3">
              <i className="fas fa-search absolute top-1/2 left-3 -translate-y-1/2 text-gray-400"></i>
              <input 
                type="text" 
                value={searchQuery} 
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar aplicaciones, juegos y mucho más" 
                className="w-full bg-gray-200 dark:bg-gray-800 border-none rounded-md pl-10 pr-4 py-2 focus:ring-2 focus:ring-blue-500" 
              />
            </div>
            <div className="price-filters flex flex-wrap items-center gap-2 text-sm">
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); handleSetPriceFilter('all'); }} 
                className={`px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 ${priceFilter === 'all' ? 'filter-active' : ''}`}
              >
                Todos
              </a>
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); handleSetPriceFilter('free'); }} 
                className={`px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 ${priceFilter === 'free' ? 'filter-active' : ''}`}
              >
                Gratis
              </a>
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); handleSetPriceFilter('paid'); }} 
                className={`px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 ${priceFilter === 'paid' ? 'filter-active' : ''}`}
              >
                De pago
              </a>
            </div>
          </header>

          {/* Contenido principal */}
          <div className="space-y-10">
            {filteredSections.map((section) => (
              <section key={section.title}>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="section-title text-xl font-semibold">{section.title}</h2>
                  <a href="#" className="text-blue-500 hover:underline hidden md:block">
                    Ver todo <i className="fas fa-chevron-right ml-1"></i>
                  </a>
                </div>
                <div className="flex space-x-4 overflow-x-auto pb-4 -mx-4 md:-mx-6 px-4 md:px-6">
                  {section.apps.map((app) => (
                    <div key={app.name} className="app-card flex-shrink-0 w-40">
                      <a href={app.link} target="_self" className="card-link">
                        <div className="app-card-container bg-white dark:bg-gray-800 rounded-lg shadow-md cursor-pointer h-full flex flex-col overflow-hidden">
                          <div className={`app-icon-container ${app.bgClass}`}>
                            <img src={app.icon} alt={app.name} className="app-icon" />
                          </div>
                          <div className="p-3 flex-grow flex flex-col justify-between">
                            <h3 className="app-title font-semibold text-sm mb-2">{app.name}</h3>
                            <div className="mt-auto">
                              <span className={`price-button ${app.isFree ? 'price-button-free' : 'price-button-paid'}`}>
                                {app.price}
                              </span>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
                <a href="#" className="text-blue-500 hover:underline mt-2 block md:hidden">
                  Ver todo <i className="fas fa-chevron-right ml-1"></i>
                </a>
              </section>
            ))}
            
            {/* Mensaje cuando no hay resultados */}
            {filteredSections.length === 0 && (
              <div className="text-center py-10">
                <i className="fas fa-search fa-3x text-gray-400 mb-4"></i>
                <p className="text-gray-500 dark:text-gray-400">No se encontraron aplicaciones que coincidan con tu búsqueda.</p>
                <button onClick={clearFilters} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                  Limpiar filtros
                </button>
              </div>
            )}
          </div>
        </main>
      </div>

      {/* Barra de navegación inferior para móviles */}
      <nav className="mobile-bottom-nav md:hidden fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-2 flex justify-around">
        <a href="#" className="p-2 text-center">
          <i className="fas fa-home block text-xl"></i>
          <span className="text-xs">Inicio</span>
        </a>
        <a href="#" className="p-2 text-center">
          <i className="fas fa-th block text-xl"></i>
          <span className="text-xs">Categorías</span>
        </a>
        <a href="#" className="p-2 text-center">
          <i className="fas fa-search block text-xl"></i>
          <span className="text-xs">Buscar</span>
        </a>
        <a href="#" className="p-2 text-center">
          <i className="fas fa-user block text-xl"></i>
          <span className="text-xs">Cuenta</span>
        </a>
      </nav>
    </div>
  );
};

export default MicrosoftStore;
