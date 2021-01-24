import DashboardShell from '@/components/DashboardShell';
import EmptyState from '@/components/EmptyState';
import SiteTable from '@/components/SiteTable';
import SiteTableSkeleton from '@/components/SiteTableSkeleton';
import fetcher from '@/utils/fetcher';
import useSWR from 'swr';
import { useAuth } from '../lib/auth';

export default function Dashboard() {
    const { user } = useAuth();
    const { data } = useSWR(user ? ['/api/sites', user.token] : null, fetcher);

    if (!data) {
        return (
            <DashboardShell>
                <SiteTableSkeleton />
            </DashboardShell>
        );
    }
    return (
        <DashboardShell>
            {data.sites ? <SiteTable sites={data.sites} /> : <EmptyState />}
        </DashboardShell>
    );
}
