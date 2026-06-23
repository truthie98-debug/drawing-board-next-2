  // ── Active Curriculum ──────────────────────────────────────
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-8 space-y-6">

        <MonthHeader
          curriculum={curriculum}
          currentDay={viewingDay}
          completedDays={completedCount}
          streak={calcStreak()}
        />

        <DayNav
          currentDay={viewingDay}
          totalDays={curriculum.totalDays}
          unlockedUpTo={unlockedUpTo}
          onPrev={() => setViewingDay(d => Math.max(1, d - 1))}
          onNext={() => setViewingDay(d => Math.min(unlockedUpTo, d + 1))}
        />

        <TodayAssignment
          curriculum={curriculum}
          dayNumber={viewingDay}
          userId={user?.id}
          onDayComplete={handleDayComplete}
        />

        <DayGrid
          curriculum={curriculum}
          currentDay={viewingDay}
          completedDays={completedDayNumbers}
          unlockedUpTo={unlockedUpTo}
          uploads={allUploads}
          onSelectDay={setViewingDay}
        />

        <div className="text-center pt-2 pb-8">
          <button
            onClick={async () => {
              if (!confirm('This will end your current curriculum. Are you sure?')) return
              await supabase
                .from('academy_enrollments')
                .update({ completed_at: new Date().toISOString() })
                .eq('id', enrollment.id)
              setEnrollment(null)
              setAllProgress([])
              setAllUploads({})
              setViewingDay(null)
            }}
            className="text-xs text-gray-400 hover:text-gray-600 underline"
          >
            Exit curriculum
          </button>
        </div>

      </div>
    </div>
  )
