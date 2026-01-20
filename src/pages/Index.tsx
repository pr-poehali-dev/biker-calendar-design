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
            backgroundImage: 'url(https://cdn.poehali.dev/projects/d0f8b45a-31f2-46db-979f-c38d444f0e92/files/78b75a23-3f79-4292-a650-aa9f0c82fc85.jpg)'
          }}
        />
        
        {/* Тёмный overlay для контраста */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-zinc-900/30 to-black/50" />

        {/* Левая вертикальная рамка с фото */}
        <div 
          className="absolute left-[120px] top-1/2"
          style={{ 
            width: '355px', 
            height: '590px',
            transform: 'translateY(-50%) rotate(-10deg)',
            transformOrigin: 'center center'
          }}
        >
          {/* Металлическая рамка с заклёпками */}
          <div className="relative w-full h-full bg-gradient-to-br from-zinc-700 via-zinc-600 to-zinc-700 p-4 shadow-2xl">
            {/* Заклёпки по углам */}
            <div className="absolute top-2 left-2 w-4 h-4 rounded-full bg-gradient-to-br from-zinc-500 to-zinc-800 shadow-inner border border-zinc-900" />
            <div className="absolute top-2 right-2 w-4 h-4 rounded-full bg-gradient-to-br from-zinc-500 to-zinc-800 shadow-inner border border-zinc-900" />
            <div className="absolute bottom-2 left-2 w-4 h-4 rounded-full bg-gradient-to-br from-zinc-500 to-zinc-800 shadow-inner border border-zinc-900" />
            <div className="absolute bottom-2 right-2 w-4 h-4 rounded-full bg-gradient-to-br from-zinc-500 to-zinc-800 shadow-inner border border-zinc-900" />
            
            {/* Дополнительные заклёпки по периметру */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-zinc-500 to-zinc-800 shadow-inner border border-zinc-900" />
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-zinc-500 to-zinc-800 shadow-inner border border-zinc-900" />
            <div className="absolute top-1/2 -translate-y-1/2 left-2 w-4 h-4 rounded-full bg-gradient-to-br from-zinc-500 to-zinc-800 shadow-inner border border-zinc-900" />
            <div className="absolute top-1/2 -translate-y-1/2 right-2 w-4 h-4 rounded-full bg-gradient-to-br from-zinc-500 to-zinc-800 shadow-inner border border-zinc-900" />

            {/* Внутренняя рамка - место для фото */}
            <div className="w-full h-full border-4 border-zinc-800/70 bg-black shadow-inner flex items-center justify-center">
              <span className="text-zinc-700 text-2xl font-semibold tracking-wider" style={{ fontFamily: 'Oswald, sans-serif' }}>
                PHOTO
              </span>
            </div>
          </div>
        </div>

        {/* Правая горизонтальная рамка с фото */}
        <div 
          className="absolute right-[100px] top-1/2"
          style={{ 
            width: '590px', 
            height: '355px',
            transform: 'translateY(-50%) rotate(10deg)',
            transformOrigin: 'center center'
          }}
        >
          {/* Металлическая рамка с заклёпками */}
          <div className="relative w-full h-full bg-gradient-to-br from-zinc-700 via-zinc-600 to-zinc-700 p-4 shadow-2xl">
            {/* Заклёпки по углам */}
            <div className="absolute top-2 left-2 w-4 h-4 rounded-full bg-gradient-to-br from-zinc-500 to-zinc-800 shadow-inner border border-zinc-900" />
            <div className="absolute top-2 right-2 w-4 h-4 rounded-full bg-gradient-to-br from-zinc-500 to-zinc-800 shadow-inner border border-zinc-900" />
            <div className="absolute bottom-2 left-2 w-4 h-4 rounded-full bg-gradient-to-br from-zinc-500 to-zinc-800 shadow-inner border border-zinc-900" />
            <div className="absolute bottom-2 right-2 w-4 h-4 rounded-full bg-gradient-to-br from-zinc-500 to-zinc-800 shadow-inner border border-zinc-900" />
            
            {/* Дополнительные заклёпки по периметру */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-zinc-500 to-zinc-800 shadow-inner border border-zinc-900" />
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-zinc-500 to-zinc-800 shadow-inner border border-zinc-900" />
            <div className="absolute top-1/2 -translate-y-1/2 left-2 w-4 h-4 rounded-full bg-gradient-to-br from-zinc-500 to-zinc-800 shadow-inner border border-zinc-900" />
            <div className="absolute top-1/2 -translate-y-1/2 right-2 w-4 h-4 rounded-full bg-gradient-to-br from-zinc-500 to-zinc-800 shadow-inner border border-zinc-900" />

            {/* Внутренняя рамка - место для фото */}
            <div className="w-full h-full border-4 border-zinc-800/70 bg-black shadow-inner flex items-center justify-center">
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
