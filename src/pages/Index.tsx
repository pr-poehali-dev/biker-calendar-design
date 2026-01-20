export default function Index() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-zinc-900 p-8">
      <div 
        className="relative shadow-2xl overflow-hidden"
        style={{ width: '1210px', height: '860px' }}
      >
        {/* Фоновая картинка с мото-гаражем */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://cdn.poehali.dev/projects/d0f8b45a-31f2-46db-979f-c38d444f0e92/files/1e2f997c-0976-4e10-99a4-3e7644292673.jpg)'
          }}
        />
        
        {/* Тёмный overlay для контраста */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-zinc-900/30 to-black/50" />

        {/* Левая вертикальная рамка с фото */}
        <div 
          className="absolute left-[80px] top-1/2"
          style={{ 
            width: '355px', 
            height: '590px',
            transform: 'translateY(-50%) rotate(-10deg)',
            transformOrigin: 'center center'
          }}
        >
          {/* Рамка из мото-цепи */}
          <div className="relative w-full h-full p-6 shadow-2xl">
            {/* Имитация цепи по периметру - верхняя */}
            <div className="absolute top-0 left-0 right-0 h-6 flex gap-1">
              {Array.from({ length: 30 }).map((_, i) => (
                <div key={`top-${i}`} className="flex-1 h-full bg-gradient-to-b from-zinc-600 to-zinc-700 rounded-sm border border-zinc-800 shadow-inner" />
              ))}
            </div>
            
            {/* Нижняя цепь */}
            <div className="absolute bottom-0 left-0 right-0 h-6 flex gap-1">
              {Array.from({ length: 30 }).map((_, i) => (
                <div key={`bottom-${i}`} className="flex-1 h-full bg-gradient-to-b from-zinc-600 to-zinc-700 rounded-sm border border-zinc-800 shadow-inner" />
              ))}
            </div>
            
            {/* Левая цепь */}
            <div className="absolute top-0 bottom-0 left-0 w-6 flex flex-col gap-1">
              {Array.from({ length: 50 }).map((_, i) => (
                <div key={`left-${i}`} className="flex-1 w-full bg-gradient-to-r from-zinc-600 to-zinc-700 rounded-sm border border-zinc-800 shadow-inner" />
              ))}
            </div>
            
            {/* Правая цепь */}
            <div className="absolute top-0 bottom-0 right-0 w-6 flex flex-col gap-1">
              {Array.from({ length: 50 }).map((_, i) => (
                <div key={`right-${i}`} className="flex-1 w-full bg-gradient-to-r from-zinc-600 to-zinc-700 rounded-sm border border-zinc-800 shadow-inner" />
              ))}
            </div>

            {/* Внутренняя рамка - место для фото */}
            <div className="w-full h-full bg-black shadow-2xl border-2 border-zinc-800 flex items-center justify-center">
              <span className="text-zinc-700 text-2xl font-semibold tracking-wider" style={{ fontFamily: 'Oswald, sans-serif' }}>
                PHOTO
              </span>
            </div>
          </div>
        </div>

        {/* Правая горизонтальная рамка с фото */}
        <div 
          className="absolute right-[60px] top-1/2"
          style={{ 
            width: '590px', 
            height: '355px',
            transform: 'translateY(-50%) rotate(10deg)',
            transformOrigin: 'center center'
          }}
        >
          {/* Рамка из мото-цепи */}
          <div className="relative w-full h-full p-6 shadow-2xl">
            {/* Имитация цепи по периметру - верхняя */}
            <div className="absolute top-0 left-0 right-0 h-6 flex gap-1">
              {Array.from({ length: 50 }).map((_, i) => (
                <div key={`top-${i}`} className="flex-1 h-full bg-gradient-to-b from-zinc-600 to-zinc-700 rounded-sm border border-zinc-800 shadow-inner" />
              ))}
            </div>
            
            {/* Нижняя цепь */}
            <div className="absolute bottom-0 left-0 right-0 h-6 flex gap-1">
              {Array.from({ length: 50 }).map((_, i) => (
                <div key={`bottom-${i}`} className="flex-1 h-full bg-gradient-to-b from-zinc-600 to-zinc-700 rounded-sm border border-zinc-800 shadow-inner" />
              ))}
            </div>
            
            {/* Левая цепь */}
            <div className="absolute top-0 bottom-0 left-0 w-6 flex flex-col gap-1">
              {Array.from({ length: 30 }).map((_, i) => (
                <div key={`left-${i}`} className="flex-1 w-full bg-gradient-to-r from-zinc-600 to-zinc-700 rounded-sm border border-zinc-800 shadow-inner" />
              ))}
            </div>
            
            {/* Правая цепь */}
            <div className="absolute top-0 bottom-0 right-0 w-6 flex flex-col gap-1">
              {Array.from({ length: 30 }).map((_, i) => (
                <div key={`right-${i}`} className="flex-1 w-full bg-gradient-to-r from-zinc-600 to-zinc-700 rounded-sm border border-zinc-800 shadow-inner" />
              ))}
            </div>

            {/* Внутренняя рамка - место для фото */}
            <div className="w-full h-full bg-black shadow-2xl border-2 border-zinc-800 flex items-center justify-center">
              <span className="text-zinc-700 text-2xl font-semibold tracking-wider" style={{ fontFamily: 'Oswald, sans-serif' }}>
                PHOTO
              </span>
            </div>
          </div>
        </div>

        {/* Декоративные элементы мото-гаража */}
        <div 
          className="absolute top-8 right-8 text-zinc-700/20 font-bold text-6xl select-none" 
          style={{ fontFamily: 'Oswald, sans-serif' }}
        >
          GARAGE
        </div>
        <div 
          className="absolute bottom-8 left-8 text-zinc-700/20 font-bold text-4xl select-none" 
          style={{ fontFamily: 'Oswald, sans-serif' }}
        >
          MOTO
        </div>
      </div>
    </div>
  );
}