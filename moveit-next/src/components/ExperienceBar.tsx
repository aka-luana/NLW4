import styles from '../styles/components/ExpererienceBar.module.css';

export function ExperienceBar(){
    return (
        <header className={styles.experienceBar}>
            {/* Inicio dos XP */}
            <span>0xp</span>

            {/* Progresso XP do user */}
            <div>
                <div style={{ width: '50%' }} />

                {/* Progresso atual */}
                <span className={styles.currentExperience} style={{ left: '50%' }}>300xp</span>
            </div>

            {/* Fim dos XP */}
            <span>600xp</span>
        </header>
    );
}